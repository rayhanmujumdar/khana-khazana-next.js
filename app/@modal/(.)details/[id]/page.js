import DetailsPage from '@/components/details/DetailsPage';
import Modal from '@/components/ui/Modal';

export default function RecipeModalDetailPage({ params: { id } }) {
    return (
        <Modal>
            <DetailsPage recipeId={id} />
        </Modal>
    );
}
