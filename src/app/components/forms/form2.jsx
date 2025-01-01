import { Form, Input, Button, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleForm2 = (e) => {
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
    if (!formData.car) newErrors.car = "لطفاً نام خودرو را وارد کنید.";
    if (!formData.license) newErrors.license = "لطفاً وضعیت گواهینامه را انتخاب کنید.";
    if (!formData.passengers) {
      newErrors.passengers = "لطفاً تعداد همراهان را انتخاب کنید.";
    } else if (!["1", "2", "3", "4"].includes(formData.passengers)) {
      newErrors.passengers = "تعداد همراهان باید بین ۱ تا ۴ نفر باشد.";
    }

    setErrors(newErrors);

    // Submit data if no errors
    if (Object.keys(newErrors).length === 0) {
      setFormData(formData);
    }
  };

  return (
    <>
      <Form onSubmit={handleForm2} className="space-y-4 ">
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
          name="car"
          placeholder="نام خودرو را وارد کنید"
          type="text"
          validationState={errors.car ? "invalid" : "valid"}
          errorMessage={errors.car}
        />

        {/* گواهینامه */}
        <Select
          isRequired
          label="گواهینامه"
          placeholder="وضعیت گواهینامه را انتخاب کنید"
          name="license"
          validationState={errors.license ? "invalid" : "valid"}
          errorMessage={errors.license}
        >
          <SelectItem value="yes">دارم</SelectItem>
          <SelectItem value="no">ندارم</SelectItem>
        </Select>

        {/* تعداد همراهان */}
        <Select
          isRequired
          label="تعداد همراهان"
          placeholder="تعداد همراهان را انتخاب کنید"
          name="passengers"
          validationState={errors.passengers ? "invalid" : "valid"}
          errorMessage={errors.passengers}
        >
          <SelectItem value="1">1 نفر</SelectItem>
          <SelectItem value="2">2 نفر</SelectItem>
          <SelectItem value="3">3 نفر</SelectItem>
          <SelectItem value="4">4 نفر</SelectItem>
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

export default Form2;
