import styles from './CategoryField.module.scss'
import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import Field from '../Field/Field'

interface ICategoryField {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}

const CategoryField: FC<ICategoryField> = ({ error, register, generate }) => {
	return (
		<div className='relative'>
			<Field {...register('category',
				{
					required: 'Category is required',
				})}
			       placeholder={'Category'}
			       error={error}
			/>
			<div className={styles.badge} onClick={generate}>
				Generate
			</div>
		</div>
	)
}

export default CategoryField
