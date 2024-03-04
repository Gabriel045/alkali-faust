import React,{useState,useEffect} from 'react'
import {useMutation,useQuery,gql} from '@apollo/client';
import {useForm} from 'react-hook-form';
import Image from "next/future/image";

export default function AcfGravityForm(props) {
  const {data} = useQuery(GET_FIELDS,{
    variables: {
      formID: props?.data?.gravytyFormBlock?.idForm ? props?.data?.gravytyFormBlock?.idForm : props?.idForm,
    },
  });

  const [isLoading,setIsLoading] = useState(true)
  const [types,setTypes] = useState([])
  const [confirmation,setConfirmation] = useState(undefined)
  const [submitText,setsubmitText] = useState(undefined)
  const {register,handleSubmit} = useForm()
  const image = props?.data?.gravytyFormBlock?.image?.node?.sourceUrl


  const [submitForm,{loading,error}] = useMutation(SUBMIT_FORM,
    {
      onCompleted: ({submitGfForm: {confirmation,errors}}) => {
        setConfirmation(confirmation); // the response
      },
      onError: ({submitGfForm}) => {
        console.log(submitGfForm); // the error if that is the case
      },
    }
  );

  //Check input Type and render it 
  const inputType = (type) => {
    switch(type.type) {
      case 'TEXT':
        return <div id={type.id} className={`input-content flex flex-col ${(type.gridColumn == 6) ? "md:w-[49%] w-full" : "w-full"} `}>
          <label className='text-[14px] font-[600] mb-[5px]'>{type.label}</label>
          <input className="font-[300] py-[10px] px-[14px] rounded-[10px] border-[1px] border-[#D0D5DD]"
            placeholder={type.placeholder} key={type.label} type="text" required={`${type.isRequired == true ? 'required' : ''}`}  {...register(`${type.label}`)} />
        </div>
      case 'EMAIL':
        return <div id={type.id} className={`input-content flex flex-col ${(type.gridColumn == 6) ? "md:w-[49%] w-full" : "w-full"} `}>
          <label className='text-[14px] font-[600] mb-[5px]'>{type.label}</label>
          <input className="font-[300] py-[10px] px-[14px] rounded-[10px] border-[1px] border-[#D0D5DD]"
            placeholder={type.placeholder} key={type.label} type="email" required={`${type.isRequired == true ? 'required' : ''}`} {...register(`${type.label}`)} />
        </div>
      case 'PHONE':
        return <div id={type.id} className={`input-content flex flex-col ${(type.gridColumn == 6) ? "md:w-[49%] w-full" : "w-full"} `}>
          <label className='text-[14px] font-[600] mb-[5px]'>{type.label}</label>
          <input className="font-[300] py-[10px] px-[14px] rounded-[10px] border-[1px] border-[#D0D5DD]"
            placeholder={type.placeholder} key={type.label} type="tel" required={`${type.isRequired == true ? 'required' : ''}`} {...register(`${type.label}`)} />
        </div>
      case 'POST_CONTENT':
        return <div id={type.id} className={`input-content flex flex-col ${(type.gridColumn == 6) ? "md:w-[49%] w-full" : "w-full"} `}>
          <label className='text-[14px] font-[600] mb-[5px]'>{type.label}</label>
          <textarea className="font-[300] h-[106px] py-[10px] px-[14px] rounded-[10px] border-[1px] border-[#D0D5DD]"
            placeholder={type.placeholder} key={type.label} required={`${type.isRequired == true ? 'required' : ''}`} {...register(`${type.label}`)} />
        </div>
      default:
        return <div>void</div>
    }
  }

  //Submit the form 
  const onSubmit = (value) => {
    const name = value['First Name']
    const LastName = value['Last Name']
    const email = value['Email']
    const phone = value['Phone Number']
    const message = value['Message']

    submitForm({
      variables: {
        name: name,
        lastName: LastName,
        email: email,
        phone: phone,
        message: message
      }
    })
  }

  useEffect(() => {
    setIsLoading(true)
    if(data) {
      const types = data.gfForm.formFields.nodes.map(item => {
        return {
          id: item.id,
          type: item.type,
          label: item.label,
          gridColumn: item.layoutGridColumnSpan,
          placeholder: item.placeholder,
          isRequired: item.isRequired
        }
      })
      setTypes(types)
      setIsLoading(false)
      setsubmitText(data.gfForm.submitButton.text)
    }
  },[data])


  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  };

  let style2 = (props?.idForm) ? style2 = {padding: '0px'} :[]
  


  return (
    <section id="GravyForm">
      <div className="block_content" style={style2}>
        <div className="flex flex-wrap lg:flex-nowrap lg:gap-[45px]">
          <div className={`flex flex-col ${props?.idForm ? 'w-full' : 'lg:w-1/2'} `}>
            {
              !props?.idForm &&
              <h4 className="text-[18px] lg:text-[24px] text-background font-[600] mb-[40px] lg:mb-[60px]">Please enter your contact information</h4>
            }
            {confirmation ? <div dangerouslySetInnerHTML={{
              __html: `
              ${confirmation?.message}
            `}}></div> : <form key="form" className="flex flex-wrap gap-y-[20px] gap-x-[8px] bg-[#F9FAFB] p-[46px] rounded-[16px]" onSubmit={handleSubmit(onSubmit)}>
              {
                isLoading || loading ? <div key="loading" className='loading'>Loading...</div> : <>
                  {
                    types.map((type,index) => inputType(type))
                  }
                  <button className='w-full rounded-[8px] px-[20px] py-[10px] text-white text-[16px] font-[500] bg-[#00BAFB]'
                    type='submit'>{submitText ? submitText : 'Submit'}</button>
                </>}
            </form>}
          </div>
          {
            !props?.idForm &&
            <div className="lg:w-1/2 rounded-[10px] h-[400px] w-full  mt-[50px] lg:h-auto lg:mt-0 min-h-[618px] bg-cover" style={style} />
          }
        </div>
      </div>
    </section>
  );
}



//fragment to get the ACF block Data
AcfGravityForm.fragments = {
  key: `GravityForm`,
  entry: gql`
    fragment GravityForm on WithAcfGravytyFormBlock {
      gravytyFormBlock  {
        idForm
        image {
            node {
             sourceUrl
            }
        }
      }
    }
  `,
};

//Query to get all fields (set the id form)
const GET_FIELDS = gql`
  query GravityForms {
  gfForm(id: 2, idType: DATABASE_ID) {
    submitButton {
       text
    }
    formFields(first: 300) {
      nodes {
        id
        type
        ... on TextField {
          id
          label
          isRequired
          layoutGridColumnSpan
           placeholder
        }
        ... on NameField {
          id
          description
          label
          inputs {
            label
          }
        }
        ... on EmailField {
          id
          isRequired
          hasEmailConfirmation
          label
          layoutGridColumnSpan
          placeholder
        }
        ... on PhoneField {
          id
          label
          isRequired
          inputType
          layoutGridColumnSpan
          placeholder
        }
        ... on PostContentField {
          id
          label
          isRequired
           layoutGridColumnSpan
          placeholder
        }
      }
    }
  }
}
`;


//Mutation to submit the form  
const SUBMIT_FORM = gql`
mutation submitForm($name: String, $lastName: String, $email:String, $message:String){
submitGfForm(
    input: {
      id: 2
      clientMutationId: "123abc"
      fieldValues: [
       {
          # Text field value
          id: 1
          value: $name
        }
        {
          # Text field value
          id: 3
          value: $lastName
        }
        {
          # Email field value
          id: 4
          emailValues: {value: $email}
        }
        {
          # Text field value
          id: 6
          value: $message
        }
      ]
      saveAsDraft: false # If true, the submission will be saved as a draft entry.
      # Set the following to validate part of a multipage form without saving the submission.
      sourcePage: 1
      targetPage: 0
    }
  ) {
     confirmation {
      type    
      message # The message HTML - if the confirmation type is a "MESSAGE".
      url     # The redirect URL - if the confirmation type is a "REDIRECT".
    }

    errors {
      id # The field that failed validation.
      message
    }
    entry {
      # See docs on querying Entries.
      id
      ... on GfSubmittedEntry {
        databaseId
      }
      ... on GfDraftEntry {
        resumeToken
      }
    }
  }
}
`








