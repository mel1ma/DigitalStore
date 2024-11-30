import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import HeaderLogin from './HeadLogin';

const Login = () => {

    return (
        <>
        <HeaderLogin/>
            <div className='h-screen flex align-items-center justify-content-center px-3'>
                <form className='col-12 md:col-3 surface-0 p-3 border-round-md'>
                    <h3 className='text-center text-4x1' style={{color:'#C92071', fontSize:'40px'}}>Login</h3>
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
                                id='senha'
                                type='password'
                                placeholder='**********'
                                className='w-full' style={{height:'25px'}}
                            />
                        </IconField>
                    </div>
                    <Button
                        label="Entrar"
                        type='submit'
                        className='w-full' style={{fontSize:'25px', color:'#ffffff', borderColor:'#c26692',backgroundColor:'#C92071', height:'40px', borderRadius:"10px"}}
                    />

                    <div className="flex flex-wrap justify-content-center flex gap-3">
                        <a
                            href="/cadastro"
                            className="m-2"
                            style={{ fontSize: '19px', color: 'dark-gray'}}
                        >
                            Se ainda não tiver conta, cadastre-se.
                        </a>
                    </div>

                </form>
            </div>
        </>
    );
}
 
export default Login;