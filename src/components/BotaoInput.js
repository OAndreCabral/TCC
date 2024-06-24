import { Input } from "antd";
import Style from './BotaoInput.module.css';

const BotaoInput = ({ placeholder, password, onChange, ref, ...props }) => {
    if (password) {
        return (
            <Input.Password
                size="large"
                className={Style.input}
                placeholder={placeholder}
                onChange={onChange}
                {...props}
            />
        );
    }

    return (
        <Input
            size="large"
            className={Style.input}
            placeholder={placeholder}
            onChange={onChange}
            ref={ref}
            {...props}
        />
    );
}

export default BotaoInput;