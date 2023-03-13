import React,{FC} from "react";
const Layout:FC<any> = (props) => {
    console.log(props)
    return <div>
        {props.children}
    </div>;
}

export default Layout;