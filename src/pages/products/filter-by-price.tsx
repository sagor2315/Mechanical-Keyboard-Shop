import { useForm } from "react-hook-form";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

type FormData = {
  minPrice: number | null;
  maxPrice: number | null;
};

type FilterByPriceProps = {
  setMinPrice: (value: number | null) => void;
  setMaxPrice: (value: number | null) => void;
};

const FilterByPrice: React.FC<FilterByPriceProps> = ({
  setMinPrice,
  setMaxPrice,
}) => {
  const form = useForm({
    defaultValues: {
      minPrice: null,
      maxPrice: null,
    },
  });

  function onSubmit(data: FormData) {
    setMaxPrice(data?.maxPrice);
    setMinPrice(data?.minPrice);
    // console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center gap-x-3 w-full"
      >
        <FormField
          control={form.control}
          name="minPrice"
          render={({ field }) => (
            <FormItem className="w-full">
              <Select
                onValueChange={(value) => field.onChange(Number(value))}
                defaultValue={
                  field.value !== null ? String(field.value) : undefined
                }
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Min Price" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                  <SelectItem value="40">40</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="60">60</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="maxPrice"
          render={({ field }) => (
            <FormItem className="w-full">
              <Select
                onValueChange={(value) => field.onChange(Number(value))}
                defaultValue={
                  field.value !== null ? String(field.value) : undefined
                }
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Max Price" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="70">70</SelectItem>
                  <SelectItem value="80">80</SelectItem>
                  <SelectItem value="90">90</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                  <SelectItem value="110">110</SelectItem>
                  <SelectItem value="120">120</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <Button type="submit">Filter</Button>
      </form>
    </Form>
  );
};
export default FilterByPrice;
