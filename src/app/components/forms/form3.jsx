//exhange 
import { Form, Input, Button, Textarea } from "@nextui-org/react";
import { useState } from "react";

const Form3 = () => {
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleForm3 = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    const newErrors = {};

    // Validation
    if (!formData.firstName) newErrors.firstName = "لطفاً نام خود را وارد کنید.";
    if (!formData.lastName) newErrors.lastName = "لطفاً نام خانوادگی خود را وارد کنید.";
    if (!formData.mobile) {
      newErrors.mobile = "شماره موبایل الزامی است.";
    } else if (!/^\d{11}$/.test(formData.mobile)) {
      newErrors.mobile = "شماره موبایل باید ۱۱ رقم عددی باشد.";
    }
    if (!formData.currentCar) newErrors.currentCar = "لطفاً نام خودروی فعلی را وارد کنید.";
    if (!formData.mileage) {
      newErrors.mileage = "لطفاً کیلومتر کارکرد را وارد کنید.";
    } else if (isNaN(formData.mileage)) {
      newErrors.mileage = "فقط عدد وارد کنید.";
    }
    if (!formData.year) {
      newErrors.year = "لطفاً سال ساخت را وارد کنید.";
    } else if (!/^\d{4}$/.test(formData.year)) {
      newErrors.year = "سال ساخت باید ۴ رقم باشد.";
    }
    if (!formData.color) newErrors.color = "لطفاً رنگ خودروی فعلی را وارد کنید.";
    if (!formData.requestedCar) newErrors.requestedCar = "لطفاً نام خودروی درخواستی را وارد کنید.";
    if (!formData.carCondition) newErrors.carCondition = "لطفاً توضیحات سلامت خودروی فعلی را وارد کنید.";

    setErrors(newErrors);

    // Submit data if no errors
    if (Object.keys(newErrors).length === 0) {
      setFormData(formData);
    }
  };

  return (
    <>
      <Form onSubmit={handleForm3} className="space-y-4">
        {/* نام */}
        <Input
          isRequired
          label=""
          labelPlacement="outside"
          name="firstName"
          placeholder="نام خود را وارد کنید"
          type="text"
          validationState={errors.firstName ? "invalid" : "valid"}
          errorMessage={errors.firstName}
        />

        {/* نام خانوادگی */}
        <Input
          isRequired
          label=" "
          labelPlacement="outside"
          name="lastName"
          placeholder="نام خانوادگی خود را وارد کنید"
          type="text"
          validationState={errors.lastName ? "invalid" : "valid"}
          errorMessage={errors.lastName}
        />

        {/* موبایل */}
        <Input
          isRequired
          label=""
          labelPlacement="outside"
          name="mobile"
          placeholder="شماره موبایل خود را وارد کنید"
          type="tel"
          validationState={errors.mobile ? "invalid" : "valid"}
          errorMessage={errors.mobile}
        />

        {/* نام خودروی فعلی */}
        <Input
          isRequired
          label="  "
          labelPlacement="outside"
          name="currentCar"
          placeholder="نام خودروی فعلی را وارد کنید"
          type="text"
          validationState={errors.currentCar ? "invalid" : "valid"}
          errorMessage={errors.currentCar}
        />

        {/* کیلومتر کارکرد */}
        <Input
          isRequired
          label=" "
          labelPlacement="outside"
          name="mileage"
          placeholder="کیلومتر کارکرد را وارد کنید"
          type="text"
          validationState={errors.mileage ? "invalid" : "valid"}
          errorMessage={errors.mileage}
        />

        {/* سال ساخت */}
        <Input
          isRequired
          label=" "
          labelPlacement="outside"
          name="year"
          placeholder="سال ساخت را وارد کنید"
          type="text"
          validationState={errors.year ? "invalid" : "valid"}
          errorMessage={errors.year}
        />

        {/* رنگ */}
        <Input
          isRequired
          label=""
          labelPlacement="outside"
          name="color"
          placeholder="رنگ خودروی فعلی را وارد کنید"
          type="text"
          validationState={errors.color ? "invalid" : "valid"}
          errorMessage={errors.color}
        />

        {/* نام خودروی درخواستی */}
        <Input
          isRequired
          label="  "
          labelPlacement="outside"
          name="requestedCar"
          placeholder="نام خودروی درخواستی را وارد کنید"
          type="text"
          validationState={errors.requestedCar ? "invalid" : "valid"}
          errorMessage={errors.requestedCar}
        />

        {/* توضیحات سلامت خودروی فعلی */}
        <Textarea
          isRequired
          label="   "
          placeholder="توضیحات سلامت خودروی فعلی را وارد کنید"
          name="carCondition"
          validationState={errors.carCondition ? "invalid" : "valid"}
          errorMessage={errors.carCondition}
        />

        {/* دکمه ارسال */}
        <Button fullWidth className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" type="submit">
          ثبت درخواست
        </Button>
      </Form>

      {/* نمایش داده‌های فرم */}
      {formData && (
        <div className="mt-6">
          <h3>اطلاعات فرم:</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default Form3;
