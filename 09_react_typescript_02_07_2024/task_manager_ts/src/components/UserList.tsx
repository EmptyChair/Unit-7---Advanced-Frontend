//////////////////////////
// USERS LIST
// USER: name, job, place - take from JASOn palceholder
/////////////////////77

import { Component, ReactNode, RefObject, createRef } from "react";

class UserList extends Component {
    textRef: RefObject<HTMLAreaElement>

    constructor(props: Record<string, never>){
        super(props);
        this.state = {
            //TODO
        }
        this.textRef = createRef();
    }

    componentDidMount(): void {
        /* TODO: what happens when you mount the component */
    }


    render(): ReactNode {
        return <>UserList</>
    }
}

export default UserList