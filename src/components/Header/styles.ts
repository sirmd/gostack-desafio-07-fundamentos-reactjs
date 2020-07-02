import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  page?: string;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        height: 80px;
        position: relative;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;

          &:after {
            content: '';
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #ff872c;
            top: 33px;
          }
        }
      }

      a.active {
        font-weight: 600;

        &:after {
          content: '';
          height: 2px;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: #ff872c;
          top: 33px;
        }
      }
    }
  }
`;
