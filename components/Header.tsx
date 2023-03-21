import {PropsWithChildren} from "react";

export default function Header(props : PropsWithChildren) {
    return (
        <div className="header">
            {props.children}
        </div>
    )
}