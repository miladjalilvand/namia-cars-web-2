import { Form, Input, Button, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

const Form0 = () => {
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleForm0 = (e) => {
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
    if (!formData.city) newErrors.city = "لطفاً شهر خود را وارد کنید.";
    if (!formData.car) newErrors.car = "لطفاً یک ماشین انتخاب کنید.";
    if (!formData.saleCondition) newErrors.saleCondition = "لطفاً شرایط فروش را انتخاب کنید.";

    setErrors(newErrors);

    // Submit data if no errors
    if (Object.keys(newErrors).length === 0) {
      setFormData(formData);
    }
  };

  return (
    <>
      <Form onSubmit={handleForm0} className="space-y-4">
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

        {/* شهر */}
        <Input
          isRequired
          label="شهر"
          labelPlacement="outside"
          name="city"
          placeholder="شهر خود را وارد کنید"
          type="text"
          validationState={errors.city ? "invalid" : "valid"}
          errorMessage={errors.city}
        />

        {/* ماشین */}
        <Select
          isRequired
          label="ماشین"
          placeholder="یک گزینه انتخاب کنید"
          name="car"
          validationState={errors.car ? "invalid" : "valid"}
          errorMessage={errors.car}
        >
          <SelectItem value="mvm350">MVM 350</SelectItem>
          <SelectItem value="mvmx22">MVM X22</SelectItem>
          <SelectItem value="mvmx33">MVM X33</SelectItem>
          <SelectItem value="tiggo7">Tiggo 7</SelectItem>
        </Select>

        {/* شرایط فروش */}
        <Select
          isRequired
          label="شرایط فروش"
          placeholder="یک گزینه انتخاب کنید"
          name="saleCondition"
          validationState={errors.saleCondition ? "invalid" : "valid"}
          errorMessage={errors.saleCondition}
        >
          <SelectItem value="cash">نقدی</SelectItem>
          <SelectItem value="installment">اقساطی</SelectItem>
          <SelectItem value="exchange">تعویض</SelectItem>
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

export default Form0;
