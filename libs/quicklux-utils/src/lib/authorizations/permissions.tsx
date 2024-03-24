
export const withPermissions = (Component: React.FC) => {
    return (props: any) => {
        if(!props.isAllowed){
            return <Component {...props} />;
        }else{
            return <h1>Not allowed</h1>;
        }
    }
}
