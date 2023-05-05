import { Links } from "../interface/Links"

export const Item = (props: Links) => {
    return (
        <li>
            <a href={props.href} target={props.target ? "_blank" : ""} >{props.title}</a>
        </li>
    )
}