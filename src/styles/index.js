import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 54px;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 16px;
  margin-bottom: 36px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 24px rgba(51, 51, 51, 0.24);
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  padding-right: 72px;
  margin-bottom: 36px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.1);

  .body {
    display: flex;

    .content {
      .details {
        font-weight: 300;
        font-size: 16px;
        color: #a5adbb;
        line-height: 25px;
      }
    }
  }

  .metadata {
    display: flex;
    flex-direction: column;

    .spacer {
      flex: 2;
    }

    .item {
      font-weight: 600;
      color: #081f32;
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: 22px;
      }

      .icon {
        margin-right: 16px;
      }

      &.stars {
        .label {
          font-weight: 400;
          color: #6e798c;
          margin-left: 4px;
        }
      }
    }
  }
`;

export const RepoName = styled.div`
  font-family: "DM Serif Display", serif;
  margin-bottom: 8px;
  font-size: 22px;
  color: #081f32;
`;

export const RepoLogo = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  margin-right: 32px;
  border-radius: 4px;
  background: linear-gradient(321.69deg, #4481eb 0%, #04befe 100%);

  img {
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 4px;
    box-shadow: 4px 6px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const Pagination = styled.div`
  button {
    font-weight: 600;
    background-color: transparent;
    cursor: pointer;
  }
  .pages {
    display: inline-block;
    padding: 0 10px;
    .pageBtn {
      position: relative;
      width: 30px;
      height: 30px;
      &:not(:last-child) {
        margin-right: 14px;
      }

      &.active::after {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 3px;
        bottom: 0;
        background-color: #65b79a;
      }
    }
  }
  .previousPageBtn {
  }
  .nextPageBtn {
  }
`;
