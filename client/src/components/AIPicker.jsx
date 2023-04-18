import CustomButton from './CustomButton'

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea 
        placeholder='ask AI...'
        className='aipicker-textarea'
        rows={5}
        value={prompt}
        onChange={(e)=> setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap gap-3'>
        { generatingImg ? (
          <CustomButton 
            type='outline'
            title='AI Logo'
            customStyles='text-xs'
            handleClick={() => handleSubmit('logo')}
          />

        ) : 
          <CustomButton 
            type='filled'
            title='AI Full'
            customStyles='text-xs'
            handleClick={() => handleSubmit('full')}
          />
        
        }

      </div>

    </div>
  )
}

export default AIPicker