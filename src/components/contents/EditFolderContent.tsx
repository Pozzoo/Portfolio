import {FormEvent, useEffect, useState} from "react";
import {ContentType} from "../../types/ContentType.ts";
import axios from "../../api/axios.ts";
import MutableIcon from "../MutableIcon.tsx";
import Button from "../Button.tsx";

interface Props {
    id: number
}

const EditFolderContent = ({ id }: Props) => {
    const [folderItems, setFolderItems] = useState<ContentType[]>([]);
    const [selectedFolderID, setSelectedFolderID] = useState<number | null>(null);

    const handleSelectFolder = (id: number) => {
        setSelectedFolderID(id);
    }

    const handleEditFolder = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            title?: { value: string };
            icon?: { files: FileList };
        };

        if (target.title?.value) {
            await axios.patch(`/api/content/update/${selectedFolderID}`, {
                "title": target.title.value,
            }).catch(e => console.log(e));
        }

        if (target.icon?.files?.[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(target.icon?.files?.[0]);

            reader.onload = async () => {
                try {
                    await axios.patch(`/api/content/icon/update/${selectedFolderID}`, {
                        icon: reader.result,
                    });
                } catch (error) {
                    console.error("Upload error:", error);
                }
            };
        }
    }

    useEffect(() => {
        axios.get(`/api/content/folder/${id}`).then((response) => setFolderItems(response.data));
    }, [id]);

    return (
        <>
            <div className="grid h-fit w-full items-start justify-start grid-cols-5">
                {folderItems.map((item, i) => {
                    return (
                        <MutableIcon key={i} content={item} onClick={() => handleSelectFolder(item.id!)} />
                    )
                })}
            </div>

            {selectedFolderID !== null && (
                <div className="w-full p-2 bg-win-light-gray border-t-2 border-win-dark-gray">
                    <form id="editFileForm" className="flex justify-around items-center" onSubmit={handleEditFolder}>
                        <div className="flex">
                            <label className="mr-1.5" htmlFor="title">Title:</label>
                            <input type="text" id="title" className="bg-white border-t-1 border-l-1 border-black"/>
                        </div>

                        <div className="flex">
                            <label className="mr-1.5" htmlFor="icon">Icon:</label>
                            <input type="file" id="icon" className="bg-white border-t-1 border-l-1 border-black"/>
                        </div>

                        <div className="flex">
                            <Button text="Save" form="editFileForm" type="submit"/>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default EditFolderContent;