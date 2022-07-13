import { FC, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { ICategoryCreateInput } from '../../layout/Navigation/CategoryContainer/category.interface'
import CategoryField from '../form-elements/CategoryField/CategoryField'
import Field from '../form-elements/Field/Field'
import generateCategory from '../../../utils/string/generateCategory'
import formStyles from '../form-elements/Form.module.scss'
import { useActions } from '../../../hooks/useActions'
import Button from '../form-elements/Button/Button'
import { toastr } from 'react-redux-toastr'

const CategoryCreate: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<ICategoryCreateInput>({
		mode: 'onChange',
	})

	const { createCategory, setModalActive } = useActions()

	const onSubmit = useCallback((data: ICategoryCreateInput) => {
		const { title, category } = data
		createCategory({ title, category })
		setModalActive({ active: false })
		toastr.success(`Create category`, `Creation successfully`)
	}, [createCategory, setModalActive])

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
			<div className={formStyles.fields}>
				<Field {...register('title',
					{
						required: 'Title is required',
					})}
				       placeholder={'Title'}
				       error={errors.title}
				       style={{ width: '31%' }}
				/>

				<div style={{ width: '31%' }}>
					<CategoryField register={register} error={errors.category} generate={() => {
						setValue('category', generateCategory(getValues('title')))
					}
					} />
				</div>

			</div>

			<Button>Create</Button>
		</form>
	)
}

export default CategoryCreate
