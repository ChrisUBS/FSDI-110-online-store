import './quantityPicker.css';

function QuantityPicker(props) {
    function increase() {
        props.onChange(props.quantity + 1);
    }

    function decrease() {
        if (props.quantity > 0) {
            props.onChange(props.quantity - 1);
        }
    }

    return (
        <div className="quantity-picker d-flex align-items-center">
            <button
                className={`btn btn-sm ${props.quantity === 0 ? 'btn-outline-secondary' : 'btn-outline-danger'}`}
                disabled={props.quantity === 0}
                onClick={decrease}
            >
                <strong>-</strong>
            </button>
            <label className="mx-2 mb-0">{props.quantity}</label>
            <button className="btn btn-sm btn-outline-success" onClick={increase}>
                <strong>+</strong>
            </button>
        </div>
    );
}

export default QuantityPicker;
