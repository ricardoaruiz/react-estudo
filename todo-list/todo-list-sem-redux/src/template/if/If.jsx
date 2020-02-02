const If = props => (
    props.test 
        ? props.children
        : false
)

If.displayName = 'If';

export default If;