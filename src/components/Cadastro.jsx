import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import HeaderLC from './HeaderLC';

const Cadastro = () => {

    return (
        <>
        <HeaderLC/>
            <div className='h-screen flex align-items-center justify-content-center'>
                <form className='col-12 md:col-3 surface-0 border-round-md'>
                    <h3 className='text-center' style={{color:'#C92071', fontSize:'40px'}}>Cadastro</h3>
                    <label htmlFor="email" className='block uppercase mb-1'>Email</label>
                    <InputText
                        id='email'
                        placeholder='exemplo@email.com'
                        className='mb-3 w-full' style={{height:'25px'}}
                    />
                    <label htmlFor="senha" className='block uppercase mb-1'>Senha</label>
                    <div className='mb-3'>
                        <IconField>
                            <InputIcon
                                className= 'pi-eye pi-eye-slash cursor-pointer'
                            />
                            <InputText
                                id='senha1'
                                type='password'
                                placeholder='**********'
                                className='w-full' style={{height:'25px'}}
                            />
                        </IconField>
                    </div>
                    <label htmlFor="repetir-senha" className='block uppercase mb-1'>Digite sua senha novamente</label>
                    <div className='mb-3'>
                        <IconField>
                            <InputIcon
                                className= ''
                            />
                            <InputText
                                id='senha2'
                                type='password'
                                placeholder='**********'
                                className='w-full' style={{height:'25px'}}
                            />
                        </IconField>
                    </div>
                    <Button
                        label="Cadastrar"
                        type='submit'
                        className='w-full' style={{fontSize:'25px', color:'#ffffff', borderColor:'#c26692',backgroundColor:'#C92071', height:'40px', borderRadius:"10px"}}
                    />
                    <div className="flex flex-wrap justify-content-center flex gap-3">
                        <a
                            href="/login"
                            className="m-2"
                            style={{ fontSize: '19px', color: 'dark-gray'}}
                        >
                            Se já tiver conta, faça o login.</a>
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default Cadastro;