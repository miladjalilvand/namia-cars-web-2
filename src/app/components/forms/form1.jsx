import { Form, Input, Button, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

const Form1 = () => {
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleForm1 = (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    const newErrors = {};

    // Check for empty fields
    if (!formData.firstName) newErrors.firstName = "لطفاً نام خود را وارد کنید.";
    if (!formData.lastName) newErrors.lastName = "لطفاً نام خانوادگی خود را وارد کنید.";
    if (!formData.mobile) {
      newErrors.mobile = "شماره موبایل الزامی است.";
    } else if (!/^\d{11}$/.test(formData.mobile)) {
      newErrors.mobile = "شماره موبایل باید ۱۱ رقم عددی باشد.";
    }
    if (!formData.carName) newErrors.carName = "لطفاً نام خودرو را وارد کنید.";
    if (!formData.kilometer) {
      newErrors.kilometer = "لطفاً کیلومتر کارکرد را وارد کنید.";
    } else if (!/^\d+$/.test(formData.kilometer)) {
      newErrors.kilometer = "فقط عدد وارد کنید.";
    }
    if (!formData.serviceType) newErrors.serviceType = "لطفاً نوع خدمت را انتخاب کنید.";

    setErrors(newErrors);

    // Submit data if no errors
    if (Object.keys(newErrors).length === 0) {
      setFormData(formData);
    }
  };

  return (
    <>
      <Form onSubmit={handleForm1} className="space-y-4">
        {/* نام */}
        <Input
          isRequired
          label="نام"
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
          label="نام خانوادگی"
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
          label="موبایل"
          labelPlacement="outside"
          name="mobile"
          placeholder="شماره موبایل خود را وارد کنید"
          type="tel"
          validationState={errors.mobile ? "invalid" : "valid"}
          errorMessage={errors.mobile}
        />

        {/* نام خودرو */}
        <Input
          isRequired
          label="نام خودرو"
          labelPlacement="outside"
          name="carName"
          placeholder="نام خودرو را وارد کنید"
          type="text"
          validationState={errors.carName ? "invalid" : "valid"}
          errorMessage={errors.carName}
        />

        {/* کیلومتر کارکرد */}
        <Input
          isRequired
          label="کیلومتر کارکرد"
          labelPlacement="outside"
          name="kilometer"
          placeholder="عدد کیلومتر کارکرد را وارد کنید"
          type="text"
          validationState={errors.kilometer ? "invalid" : "valid"}
          errorMessage={errors.kilometer}
        />

        {/* نوع خدمت */}
        <Select
          isRequired
          label="نوع خدمت"
          placeholder="یک گزینه انتخاب کنید"
          name="serviceType"
          validationState={errors.serviceType ? "invalid" : "valid"}
          errorMessage={errors.serviceType}
        >
          <SelectItem value="accident">تصادف</SelectItem>
          <SelectItem value="technicalIssue">مشکل فنی</SelectItem>
          <SelectItem value="regularService">سرویس ادواری</SelectItem>
        </Select>

        {/* دکمه ارسال */}
        <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" type="submit">
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

export default Form1;
