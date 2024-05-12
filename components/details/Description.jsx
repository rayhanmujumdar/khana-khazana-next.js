import Step from './Step';

export default function Description() {
    return (
        <section>
            <div class="container py-12">
                <h3 class="font-semibold text-xl py-6">How to Make it</h3>
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
