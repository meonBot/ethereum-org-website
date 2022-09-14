import React from "react"
import styled from "@emotion/styled"

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div<{
  size: number
  checked: boolean
}>`
  display: inline-block;
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  min-width: ${(props) => props.size}rem;
  background: ${(props) =>
    props.checked
      ? props.theme.colors.primary400
      : props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.black50};
  border-radius: 3px;
  transition: all 150ms;
  &:hover {
    box-shadow: ${(props) => props.theme.colors.tableItemBoxShadow};
    border: 1px solid ${(props) => props.theme.colors.primary600};
    transition: transform 0.1s;
    transform: scale(1.02);
  }
`

const Icon = styled.svg<{
  checked: boolean
}>`
  fill: none;
  stroke: ${(props) => props.theme.colors.white};
  stroke-width: 2px;
  visibility: ${(props) => (props.checked ? "visible" : "hidden")};
`

const Label = styled.span`
  margin-left: 0.5rem;
`

export interface IProps {
  children?: React.ReactNode
  callback?: () => void
  checked: boolean
  className?: string
  size?: number
}

const Checkbox: React.FC<IProps> = ({
  callback,
  checked,
  children,
  className,
  size = 2,
  ...rest
}) => {
  const handleClick = () => {
    if (callback) {
      callback()
    }
  }
  return (
    <CheckboxContainer className={className} onClick={handleClick}>
      <HiddenCheckbox type="checkbox" checked={checked} readOnly {...rest} />
      <StyledCheckbox
        aria-hidden="true"
        checked={checked}
        className="styled-checkbox"
        size={size}
      >
        <Icon checked={checked} viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      {children && <Label>{children}</Label>}
    </CheckboxContainer>
  )
}

export default Checkbox
