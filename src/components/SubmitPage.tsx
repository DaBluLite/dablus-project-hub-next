'use client'

import Form from 'next/form';
import {
    Menu,
    MenuHandler,
    MenuList
} from "@material-tailwind/react";
import { useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { submitColorway, submitSource } from '@/app/colorways/submit/actions';

export default function SubmitPage() {
    const [active, setActive] = useState(0);
    return <div className="flex flex-col gap-2 w-full p-5 rounded-md bg-primary-600">
        <div className="flex gap-2 justify-items-stretch">
            <div className={`rounded-md w-full text-center [.active]:bg-primary-400 [.active]:shadow-primary-400 px-4 py-1 select-none cursor-pointer${active === 0 ? " active" : ""}`} onClick={() => setActive(0)}>Colorway</div>
            <div className={`rounded-md w-full text-center [.active]:bg-primary-400 [.active]:shadow-primary-400 px-4 py-1 select-none cursor-pointer${active === 1 ? " active" : ""}`} onClick={() => setActive(1)}>Source</div>
        </div>
        {active === 0 ? <Colorway /> : null}
        {active === 1 ? <Source /> : null}
    </div>
}

function Colorway() {
    const [name, setName] = useState("");
    const [accent, setAccent] = useState("#5865f2");
    const [primary, setPrimary] = useState("#313338");
    const [secondary, setSecondary] = useState("#2b2d31");
    const [tertiary, setTertiary] = useState("#1e1f22");

    return <Form action={submitColorway} className='flex flex-col gap-2'>
        <input name="name" type="text" onChange={(e) => setName(e.currentTarget.value)} value={name} placeholder="Give this colorway a name..." className="bg-primary-500 transition p-2 rounded-sm outline-none" />
        <div className="hidden">
            <input type="text" name="accent" value={accent} readOnly />
            <input type="text" name="primary" value={primary} readOnly />
            <input type="text" name="secondary" value={secondary} readOnly />
            <input type="text" name="tertiary" value={tertiary} readOnly />
        </div>
        <div className="flex gap-2">
            <Menu placement="bottom-start" dismiss={{
                itemPress: false,
            }}>
                <MenuHandler>
                    <div className="justify-center items-center flex cursor-pointer transition rounded-sm py-2 px-4 w-full" style={{
                        background: accent
                    }}>
                        Accent
                    </div>
                </MenuHandler>
                <MenuList className="z-40 rounded-sm bg-primary-600 border-none w-fit p-4 flex flex-col gap-2 justify-items-stretch mt-2 ml-[-.5rem] shadow-primary-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <HexColorPicker className="rounded-sm" color={accent} onChange={setAccent} />
                    <input type="text" onChange={(e) => setAccent(e.currentTarget.value)} value={accent} className="bg-primary-500 transition p-2 rounded-sm outline-none" />
                </MenuList>
            </Menu>
            <Menu placement="bottom-start" dismiss={{
                itemPress: false,
            }}>
                <MenuHandler>
                    <div className="justify-center items-center flex cursor-pointer transition rounded-sm py-2 px-4 w-full" style={{
                        background: primary
                    }}>
                        Primary
                    </div>
                </MenuHandler>
                <MenuList className="z-40 rounded-sm bg-primary-600 border-none w-fit p-4 flex flex-col gap-2 justify-items-stretch mt-2 ml-[-.5rem] shadow-primary-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <HexColorPicker className="rounded-sm" color={primary} onChange={setPrimary} />
                    <input type="text" onChange={(e) => setPrimary(e.currentTarget.value)} value={primary} className="bg-primary-500 transition p-2 rounded-sm outline-none" />
                </MenuList>
            </Menu>
            <Menu placement="bottom-start" dismiss={{
                itemPress: false,
            }}>
                <MenuHandler>
                    <div className="justify-center items-center flex cursor-pointer transition rounded-sm py-2 px-4 w-full" style={{
                        background: secondary
                    }}>
                        Secondary
                    </div>
                </MenuHandler>
                <MenuList className="z-40 rounded-sm bg-primary-600 border-none w-fit p-4 flex flex-col gap-2 justify-items-stretch mt-2 ml-[-.5rem] shadow-primary-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <HexColorPicker className="rounded-sm" color={secondary} onChange={setSecondary} />
                    <input type="text" onChange={(e) => setSecondary(e.currentTarget.value)} value={secondary} className="bg-primary-500 transition p-2 rounded-sm outline-none" />
                </MenuList>
            </Menu>
            <Menu placement="bottom-start" dismiss={{
                itemPress: false,
            }}>
                <MenuHandler>
                    <div className="justify-center items-center flex cursor-pointer transition rounded-sm py-2 px-4 w-full" style={{
                        background: tertiary
                    }}>
                        Tertiary
                    </div>
                </MenuHandler>
                <MenuList className="z-40 rounded-sm bg-primary-600 border-none w-fit p-4 flex flex-col gap-2 justify-items-stretch mt-2 ml-[-.5rem] shadow-primary-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <HexColorPicker className="rounded-sm" color={tertiary} onChange={setTertiary} />
                    <input type="text" onChange={(e) => setTertiary(e.currentTarget.value)} value={tertiary} className="bg-primary-500 transition p-2 rounded-sm outline-none" />
                </MenuList>
            </Menu>
        </div>
        <button className="rounded-sm accent-button py-1 cursor-pointer px-4 w-fit" type="submit">Submit Colorway</button>
    </Form>
}

function Source() {
    const [name, setName] = useState("");
    const [file, setFile] = useState<File>(new File([], ""));
    const fileInput = useRef(null);

    return <Form action={submitSource} className='flex flex-col gap-2'>
        <input name="name" type="text" onChange={(e) => setName(e.currentTarget.value)} value={name} placeholder="Give this source a name..." className="bg-primary-500 transition p-2 rounded-sm outline-none" />
        <div className='bg-primary-500 rounded-sm w-fit flex'>
            <input type="file" name="source" ref={fileInput} className='hidden' onChange={e => {
                if(e.currentTarget.files && e.currentTarget.files.length) {
                    setFile(e.currentTarget.files[0]);
                }
            }} />
            <div className='bg-primary-700 hover:bg-primary-400 rounded-l-sm py-2 px-4 transition cursor-pointer' onClick={() => (fileInput.current as unknown as HTMLInputElement).click()}>Select</div>
            <input type="text" readOnly value={file.name} placeholder='No file selected...' className='pl-2' />
        </div>
        <button className="rounded-sm accent-button py-1 cursor-pointer px-4 w-fit" type="submit">Submit Colorway</button>
    </Form>
}
