import { Links } from "../interface/Links"
import { Item } from "./Item"

export const Nav = ({ links }: { links:Links[] }) => {
    return (
        <nav>
            <ul>
            {
                links.map((link: Links) => <Item key={link.title} title={link.title} href={link.href} />)
            }
            </ul>
        </nav>
    )
}