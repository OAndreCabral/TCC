import { Input } from "antd";
import Style from './BotaoInput.module.css';
import InputMask from 'react-input-mask';

const BotaoInput = ({ placeholder, password, onChange, mask, ...props }) => {
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

    if (mask) {
        return (
            <InputMask mask={mask} onChange={onChange} {...props}>
                {(inputProps) => <Input {...props} size="large" className={Style.input} placeholder={placeholder} {...inputProps} />}
            </InputMask>
        );
    }

    return (
        <Input
            size="large"
            className={Style.input}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
        />
    );
}

export default BotaoInput;
