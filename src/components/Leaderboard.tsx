import React from "react"
import styled from "@emotion/styled"
import Emoji from "./OldEmoji"
import Link from "./Link"

import Translation from "./Translation"

const Table = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: ${(props) => props.theme.colors.tableBoxShadow};
  width: 100%;
  margin-bottom: 2rem;
`

const Item = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.text} !important;
  box-shadow: 0 1px 1px ${(props) => props.theme.colors.tableItemBoxShadow};
  margin-bottom: 1px;
  padding: 1rem;
  width: 100%;
  color: #000000;
  &:hover {
    text-decoration: none;
    border-radius: 4px;
    box-shadow: 0 0 1px ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.tableBackgroundHover};
  }
`

const ItemTitle = styled.div``

const ItemDesc = styled.div`
  font-size: ${(props) => props.theme.fontSizes.s};
  margin-bottom: 0;
  opacity: 0.6;
`

const TextContainer = styled.div`
  flex: 1 1 75%;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`

const Avatar = styled.img`
  margin-right: 1rem;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    display: none;
  }
`

const ItemNumber = styled.div`
  margin-right: 1rem;
  opacity: 0.4;
`

const githubUrl = `https://github.com/`

export interface Person {
  name: string
  username?: string | null
  score: number
}

export interface IProps {
  content: Array<Person>
  limit?: number
}

const Leaderboard: React.FC<IProps> = ({ content, limit = 100 }) => (
  <Table>
    {content
      .filter((_, idx) => idx < limit)
      .map((item, idx) => {
        const { name, username, score } = item
        const hasGitHub = username !== ""
        const avatarImg = hasGitHub
          ? `${githubUrl}${username}.png?size=40`
          : "https://github.com/random.png?size=40"
        const avatarAlt = hasGitHub ? `${username} GitHub avatar` : ""
        let emoji: string | null = null
        if (idx === 0) {
          emoji = ":trophy:"
        } else if (idx === 1) {
          emoji = ":2nd_place_medal:"
        } else if (idx === 2) {
          emoji = ":3rd_place_medal:"
        }
        return (
          <Item key={idx} to={hasGitHub ? `${githubUrl}${username}` : "#"}>
            <ItemNumber>{idx + 1}</ItemNumber>
            <Avatar src={avatarImg} alt={avatarAlt} />
            <TextContainer>
              <ItemTitle>{name}</ItemTitle>
              <ItemDesc>
                {score}{" "}
                <Translation id="page-upgrades-bug-bounty-leaderboard-points" />
              </ItemDesc>
            </TextContainer>
            {emoji && <Emoji mr={`2rem`} text={emoji} />}
          </Item>
        )
      })}
  </Table>
)

export default Leaderboard
