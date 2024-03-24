
import React from 'react';

export const withAuthintication = (Component: React.FC) => {

    return (props: any) => {
        const onCaptchaFilled = () => {
            console.log('onCaptchaFilled');
        }
        if(props.login){
           // return <Modal onCaptchaFilled {...props} />;
        }
        return <Component {...props} />;
    };
}