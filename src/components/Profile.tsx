import { ChangeEvent, Fragment, useState, useRef } from "react";
import { ProfileCard } from "./ProfileCard";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import html2canvas from "html2canvas";

export const Profile = () => {
  const printRef = useRef();

  const handleDownload = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element, { backgroundColor: null });

    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  const major_list = ["Engineering", "Engineering(CP)", "Engineering(CEDT)"];

  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [instagram, setInstagram] = useState("");
  const [colorFrom, setColorFrom] = useState("#00C3AE");
  const [colorTo, setColorTo] = useState("#7210DB");

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onMajorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMajor(event.target.value);
  };

  const onInstagramChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInstagram(event.target.value);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold my-6">Create your Profile Card</h1>
      <div className="flex gap-3 my-3">
        <p className="text-xl">Name</p>
        <input
          type="text"
          className="text-xl"
          name="name"
          onChange={onNameChange}
          value={name}
        ></input>
      </div>
      <Menu as="div" className="inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Options
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {major_list.map((major_element) => (
                <Menu.Item>
                  <button
                    onClick={() => setMajor(major_element)}
                    className="mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    {major_element}
                  </button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <div className="flex gap-3 my-3">
        <p className="text-xl">Instagram</p>
        <input
          type="text"
          className="text-xl"
          name="instagram"
          onChange={onInstagramChange}
          value={instagram}
        ></input>
      </div>

      <div ref={printRef} className="bg-transparent">
        <ProfileCard
          name={name}
          major={major}
          instagram={instagram}
          colorFrom={colorFrom}
          colorTo={colorTo}
        />
      </div>
      <button type="button" onClick={handleDownload}>
        Download as Image
      </button>
    </div>
  );
};
