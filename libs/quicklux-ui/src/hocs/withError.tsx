

export const withError = (Component: React.FC) => {
    return (props: any) => {

        if (props.error) {
            return <p>Something went wrong...</p>;
        }
        return <Component {...props} />;
    };
}