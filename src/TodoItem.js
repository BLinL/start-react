
export function TodoItem(props) {
    return (
        <div>
            <input type="checkbox"
                onClick={() => props.handleState(props.id)}
                checked={props.state}>
            </input>
            {props.state  // 条件渲染
                ? <del>{props.text}</del>
                : <span>{props.text}</span>
            }
        </div>
    );
}