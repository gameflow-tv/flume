import { faChevronDown } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import _ from 'lodash'
import React, {
  createRef,
  forwardRef,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { useOutsideClick } from '../../../../hooks/useOutsideClick'
import theme from '../../../../theme/theme'
import { Checkbox } from '../../Checkbox'
import { InputProps } from '../shared/Input.definitions'
import {
  FormGroup,
  IconWrapper,
  Item,
  ItemContent,
  Label,
  PlaceholderItem,
  SelectArrow,
  SelectGroup,
  SelectUl
} from './Select.styles'

type InternalOptionProps = {
  id?: string
  key?: string | number
  value: string
  label: string
  children?: ReactNode
  multiple?: boolean
  selected?: boolean
  wrapItems?: boolean
  onClick?: (value: string, isChecked?: boolean) => void
}

const InternalOption = forwardRef(({ multiple = false, ...props }: InternalOptionProps, ref) => {
  const checkRef = useRef(null)

  const handleClick = (value: string) => {
    if (multiple) {
      const isChecked = !checkRef.current.isChecked
      checkRef.current.setIsChecked(isChecked)
      props.onClick?.call(null, value, isChecked)
    } else {
      props.onClick?.call(null, value)
    }
  }

  const unselect = () => {
    checkRef.current.setIsChecked(false)
  }

  const select = () => {
    checkRef.current.setIsChecked(true)
  }

  useImperativeHandle(ref, () => {
    return {
      unselect,
      select
    }
  })

  return (
    <Item
      key={props.key}
      id={props.id || _.uniqueId().toString()}
      value={props.value}
      wrapItems={props.wrapItems}
      onClick={(e) => handleClick(props.value)}
    >
      <ItemContent>
        {multiple && (
          <Checkbox
            ref={checkRef}
            className="itemCheck"
            width="18px"
            height="18px"
            checked={props.selected || false}
            uncheckedContent=""
            uncheckedBackground="transparent"
            uncheckedBorder={theme.colors.inputBackground}
          />
        )}
        {props.children}
      </ItemContent>
    </Item>
  )
})

export type OptionProps = {
  key?: string | number
  value: string
  label: ReactNode
  selected?: boolean
  children?: ReactNode
}

const allOptionsId = `all_opt_${_.uniqueId()}`

export const Option = ({ key, value, label, selected, children }: OptionProps) => {
  return React.createElement('div', { key, value, label, selected }, children)
}

export type SelectProps = InputProps & {
  id?: string
  placeholder?: ReactNode
  children?: ReactNode
  wrapItems?: boolean
  multiple?: boolean
  style?: React.CSSProperties
  selectIcon?: ReactNode
  defaultAllSelected?: boolean
  allSelectedLabel?: string
  allSelectedContent?: ReactNode
  onChange?: (val) => void
}

const getChildren = (props) => {
  let options = React.Children?.map(props.children, (child: ReactElement) => {
    return {
      ref: createRef(),
      children: child.props.children,
      label: child.props.label,
      selected: child.props.selected || false,
      value: child.props.value
    }
  })

  if (options) {
    if (props.allSelectedLabel) {
      options = [
        {
          ref: createRef(),
          value: allOptionsId,
          label: props.allSelectedLabel,
          selected: props.defaultAllSelected || false,
          children: props.allSelectedContent
        },
        ...options
      ]
    }
  }

  return options
}

export const Select = forwardRef((props: SelectProps, ref) => {
  const selectRef = useRef(null)
  const [options, setOptions] = useState(getChildren(props))
  const [selectedPlaceholder, setSelectedPlaceholder] = useState<ReactNode>(props.placeholder)
  const [isExpanded, setIsExpanded] = useState(false)
  useOutsideClick(selectRef, () => setIsExpanded(false))

  useImperativeHandle(ref, () => {
    return {
      updateOptions: () => {
        setOptions(getChildren(props))
      }
    }
  })

  const getOptionRef = (value) => {
    const option = options?.find((opt) => opt['value'] === value)
    return option ? option['ref'] : undefined
  }

  const selectAllItems = (allItemsIdx) => {
    const opts = [...options]
    if (allItemsIdx >= 0 && opts) {
      opts.forEach((opt) => {
        opt.selected = false
      })
      opts[allItemsIdx].selected = true
      setOptions(opts)
    }
  }

  const selectItem = (idx, idxAllOpt, isChecked) => {
    const opts = [...options]

    if (opts[idxAllOpt]) opts[idxAllOpt].selected = false
    if (props.multiple) {
      opts[idx].selected = isChecked
    } else {
      opts.forEach((opt) => {
        opt.selected = false
      })
      opts[idx].selected = true
      setIsExpanded(false)
    }

    if (isAllSelected(opts)) {
      selectAllItems(idxAllOpt)
    } else {
      setOptions(opts)
    }
  }

  const isAllSelected = useCallback((opts) => {
    let allSelected = false
    const selectionList = opts
      .filter((opt) => opt.value !== allOptionsId)
      .map((opt) => opt.selected)
    const trueCount = selectionList.filter((sl) => sl === true).length
    if (trueCount === 0 || trueCount === selectionList.length) allSelected = true
    return allSelected
  }, [])

  const handleItemClick = (value: string | string[], isChecked?: boolean) => {
    const opts = [...options]
    const idx = opts?.findIndex((opt) => opt.value === value)
    const idxAllOpt = opts?.findIndex((opt) => opt.value === allOptionsId)

    if (idx >= 0) {
      if (opts[idx].value === allOptionsId) {
        selectAllItems(idxAllOpt)
      } else {
        selectItem(idx, idxAllOpt, isChecked)
      }
    }
  }

  const filterSelected = useCallback(
    (opt, idxAllOpt) => {
      if (options[idxAllOpt]?.selected) {
        if (opt.value !== allOptionsId) return true
      } else {
        return opt.selected
      }
    },
    [options]
  )

  useEffect(() => {
    if (isAllSelected(options)) {
      const allOptions = options?.find((opt) => opt.value === allOptionsId)
      if (allOptions?.selected) {
        setSelectedPlaceholder(allOptions.label)
      }
    } else {
      const idxAllOpt = options?.findIndex((opt) => opt.value === allOptionsId)
      const selectedLabels = options
        ?.filter((opt) => filterSelected(opt, idxAllOpt))
        .map((opt) => opt.label)
      setSelectedPlaceholder(selectedLabels)
    }
  }, [filterSelected, isAllSelected, options])

  useEffect(() => {
    const idxAllOpt = options?.findIndex((opt) => opt.value === allOptionsId)
    const selectedValues = options
      ?.filter((opt) => filterSelected(opt, idxAllOpt))
      .map((opt) => opt.value)
    if (props.multiple) {
      props.onChange?.call(undefined, selectedValues)
    } else {
      props.onChange?.call(undefined, selectedValues.length > 0 ? selectedValues[0] : undefined)
    }
  }, [filterSelected, options, props.multiple, props.onChange])

  return (
    <FormGroup ref={selectRef}>
      <SelectUl onClick={() => setIsExpanded(!isExpanded)} style={props.style}>
        <PlaceholderItem wrapItems={props.wrapItems}>
          {props.selectIcon && <IconWrapper>{props.selectIcon}</IconWrapper>}
          {selectedPlaceholder}
          <SelectArrow className={isExpanded === true && 'expanded'}>
            <FontAwesomeIcon icon={faChevronDown} />
          </SelectArrow>
        </PlaceholderItem>
      </SelectUl>
      <SelectGroup isExpanded={isExpanded}>
        {options?.map((opt) => {
          return (
            <InternalOption
              ref={getOptionRef(opt.value)}
              key={`opt_${opt.id || _.uniqueId()}`}
              value={opt.value}
              multiple={props.multiple}
              selected={opt.selected}
              wrapItems={props.wrapItems}
              label={opt.label}
              onClick={handleItemClick}
            >
              {opt.children}
            </InternalOption>
          )
        })}
      </SelectGroup>
    </FormGroup>
  )
})
