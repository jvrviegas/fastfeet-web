import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const MoreActions = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const ActionsList = styled.aside`
  position: absolute;
  min-width: 140px;
  width: max-content;
  left: calc(50% - (${(props) => (props.larger ? `${85}px` : `${65}px`)}));
  top: calc(100% + 8px);
  background: #fff;
  border-radius: 4px;
  padding: 5px 10px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  border: 1px solid #eee;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 8px);
    top: -8px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid #eee;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Action = styled.button`
  width: 100%;
  display: flex;
  border: 0;
  background: transparent;
  text-align: left;
  font-size: 16px;
  color: #999;
  padding: 10px 0;

  svg {
    margin-right: 5px;
  }

  & + button {
    border-top: 1px solid #eee;
  }
`;
