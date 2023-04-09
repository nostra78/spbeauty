import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='col ms-5 d-inline-flex flex-column gap-4 divid justify-content-between'>
                <div className='d-inline-flex flex-column gap-4'>
                    <div className='title'>Адреса заведений</div>
                    <div className='d-inline-flex flex-column gap-2'>
                        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                    </div>
                </div>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    );
}

export default Addresses;