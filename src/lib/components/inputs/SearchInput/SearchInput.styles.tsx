import styled from 'styled-components'

export type SearchInputProps = {
  fontFamily: string
  fontSize: string
  borderColor: string
  color: string
  shadow: string
  borderRadius: string
  padding: string
  lineHeight: string
}

export const Search = styled.input<SearchInputProps>`
  width: 302px;
  height: 41px;
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  background: #36393b;
  border: 1px solid ${(props) => props.borderColor};
  box-sizing: border-box;
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily}, sans-serif;
  font-weight: 400;
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  box-shadow: ${(props) => props.shadow};
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(120%);
  }

  &:focus {
    outline: none;
  }
`
export const Wrapper = styled.div`
  position: relative;
`
export const Icon = styled.span<Partial<SearchInputProps>>`
  position: absolute;
  right: 15px;
  top: 0;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
