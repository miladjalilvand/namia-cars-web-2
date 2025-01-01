import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Form0 from "./form0";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
const formsData = [
  { index: 0, title: "پیش ثبت نام" },
  { index: 1, title: "تماس با ما" },
  { index: 2, title: "تست درایو" },
  { index: 3, title: "طرح تعویض" },
];

export default function ModalForm({ tab }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const finalForm = () => {
    switch (tab) {
      case 0:
        return <Form0 />;
      case 1:
        return <Form1 />;
      case 2:
        return <Form2 />;
      case 3:
        return <Form3 />;
      default:
        return <Form0 />;
    }
  };

  return (
    <>
      {tab >= 0 && tab < formsData.length && (
        <button className="text-black w-full border" onClick={onOpen}>
          {formsData[tab].title}
        </button>
      )}
     <div className="">
     <Modal
     
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={isOpen}
        radius="lg"
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {formsData[tab]?.title || "عنوان پیش‌فرض"}
              </ModalHeader>
              <ModalBody>{finalForm()}</ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  لغو
                </Button>
             
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
     </div>
    </>
  );
}
