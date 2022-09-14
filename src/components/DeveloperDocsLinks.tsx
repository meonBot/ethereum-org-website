import React from "react"
import { ListItem } from "./SharedStyledComponents"
import Translation from "./Translation"
import Link from "./Link"
import docLinks from "../data/developer-docs-links.yaml"

export interface IProps {
  headerId: string
}

const DeveloperDocsLinks: React.FC<IProps> = ({ headerId }) => (
  <React.Fragment>
    {docLinks
      .filter(({ id }) => id.includes(headerId))
      .map(({ items, id }) => (
        <ul key={id}>
          {items &&
            items.map(({ id, to, path, description, items }) => (
              <ListItem key={id}>
                {to || path ? (
                  <Link to={to || path}>
                    <Translation id={id} />
                  </Link>
                ) : (
                  <Translation id={id} />
                )}
                <i>
                  {" – "}
                  <Translation id={description} />
                </i>
                <ul>
                  {items &&
                    items.map(({ id, to, path }) => (
                      <ListItem key={id}>
                        <Link to={to || path}>
                          <Translation id={id} />
                        </Link>
                      </ListItem>
                    ))}
                </ul>
              </ListItem>
            ))}
        </ul>
      ))}
  </React.Fragment>
)

export default DeveloperDocsLinks
