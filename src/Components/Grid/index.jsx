import PropTypes from "prop-types";

Grid.propTypes = {
    children: PropTypes.node.isRequired
};

function Grid({children}) {
    return (
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {children}
        </div>
    )
}

export default Grid
