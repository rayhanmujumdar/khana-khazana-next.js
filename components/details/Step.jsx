export default function Step({ step, serial }) {
    return (
        <div className="step">
            <h3>Step {serial}</h3>
            <p>{step}</p>
        </div>
    );
}
