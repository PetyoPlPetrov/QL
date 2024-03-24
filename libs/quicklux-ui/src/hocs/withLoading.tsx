

export const withLoading = (Component: React.FC) => {
    return (props: any) => {
        if (props.loading) {
            return <p>Loading...</p>;
        }
        return <Component {...props} />;
    };
}
