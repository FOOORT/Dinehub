import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ActionButton from "@/components/common/actionbutton";
import MenuCard from "@/components/common/Menu/menucard";
import {FaPlus} from "react-icons/fa";
import AddMenuModal from "@/components/common/Menu/AddMenuModal";
import {getMenu, loadMenu} from "@/store/restaurant/menu";

const TabNav = () => {
    const dispatch = useDispatch();
    const menus = useSelector(getMenu)

    useEffect(() => {
        dispatch(loadMenu)
    }, []);

    const [addUserModal, setAddUserModal] = useState(false);
    const userHandleModal = () => setAddUserModal((prev) => !prev);

    return (
        <div className="mt-4 w-full">
            <div className="w-full flex justify-between items-center my-3">
                <ActionButton
                    name="Add Menu"
                    icon={<FaPlus/>}
                    click={userHandleModal}
                />
                {addUserModal && <AddMenuModal closeModal={userHandleModal}/>}
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {
                    menus?.map((item, index) => (
                            <MenuCard
                                key={index}
                                name={item.menuName}
                                price={item.menuPrice}
                                category={item.menuCategory}
                                desc={item.menuDescription}
                                status={item.menuStatus}
                                image={item.menuImage}
                            />
                        )
                    )}
            </div>
        </div>
    );
};

export default TabNav;
