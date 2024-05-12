import Step from './Step';

export default function Description() {
    return (
        <section>
            <div className="container py-12">
                <h3 className="font-semibold text-xl py-6">How to Make it</h3>
                <div>
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                </div>
            </div>
        </section>
    );
}
