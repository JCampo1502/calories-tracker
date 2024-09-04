import { Category as CategoryEnum } from "@core/enums/Category";
import {
    FormControl,
    FormLabel,
    Paper,
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput,
    Stack,
    TextField,
    Button,
    SelectChangeEvent,
} from "@mui/material";
import { useRef } from "react";
import { useForm } from "../hooks/useForm";

const Form = () => {
    const { formData, setFormData } = useForm<string | number | null>({
        category: "",
        activity: "",
        calories: 0,
    });

    const calorieInputRef = useRef<HTMLInputElement | null>(null);
    const activityInputRef = useRef<HTMLInputElement | null>(null);

    const handleCategoryChange = (e: SelectChangeEvent) =>
        setFormData("category", e.target.value);

    const handleInputChange =
        (prop: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
            setFormData(prop, e.target.value);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Paper
            component="form"
            elevation={2}
            sx={{
                display: "flex",
                flexDirection: "column",
                p: 5,
                mx: "auto",
                borderRadius: 2,
            }}
            onSubmit={handleSubmit}
        >
            <Stack
                component="fieldset"
                sx={{
                    border: "none",
                }}
                spacing={3}
            >
                <FormLabel component="legend" sx={{ mb: 2 }}>
                    Form
                </FormLabel>
                <FormControl>
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category"
                        input={<OutlinedInput label="category" />}
                        value={formData.category as string}
                        onChange={handleCategoryChange}
                    >
                        <MenuItem value={CategoryEnum.Calories}>
                            Calories
                        </MenuItem>
                        <MenuItem value={CategoryEnum.Exercise}>
                            Exercise
                        </MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    ref={activityInputRef}
                    value={formData.activity}
                    onChange={handleInputChange("activity")}
                    label="Activity"
                    placeholder="Ex. Food, Soda, Exercise, Jumps"
                />

                <TextField
                    ref={calorieInputRef}
                    value={formData.calories}
                    onChange={handleInputChange("calories")}
                    label="Calories"
                    type="number"
                    placeholder="Calories, Ex. 300 or 500"
                />
                <Button
                    type="submit"
                    sx={{
                        textTransform: "uppercase",
                        fontWeight: "Bold",
                        p: 2,
                        color: "#fff",
                        bgcolor: "rgb(31 41 55)",
                        width: 1,
                        "&:hover": {
                            bgcolor: "rgb(17 24 39)",
                        },
                    }}
                >
                    Save food od Save exercise
                </Button>
            </Stack>
        </Paper>
    );
};

export default Form;
