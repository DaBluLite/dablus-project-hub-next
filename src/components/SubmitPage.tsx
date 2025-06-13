/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Form from 'next/form';
import { useLayoutEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { submitColorway, submitSource } from '@/app/colorways/submit/actions';
import { Dispatcher } from '@/api';

export default function SubmitPage() {
    const [active, setActive] = useState(0);
    return <div className="flex flex-col gap-2 w-full">
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
            <div className="justify-center items-center flex cursor-pointer transition rounded-md py-2 px-4 w-full border" style={{
                background: accent,
                borderColor: `color-mix(in oklab, color-mix(in oklab, ${accent}, #ffffff 40%) 20%, transparent)`
            }}
                onClick={(e) => {
                    e.stopPropagation();
                    Dispatcher.emit("OPEN_CONTEXT_MENU", {
                        render() {
                            function Menu() {
                                const targetRef = useRef(null);
                                const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

                                useLayoutEffect(() => {
                                    if (targetRef.current) {
                                        setDimensions({
                                            width: (targetRef.current as any).offsetWidth,
                                            height: (targetRef.current as any).offsetHeight
                                        });
                                    }
                                }, []);
                                return <div ref={targetRef} className="contextmenu" onClick={e => e.stopPropagation()} style={{
                                    top: `${Math.min(e.pageY, window.innerHeight - dimensions.height - 8)}px`,
                                    left: `${Math.min(e.pageX, window.innerWidth - dimensions.width - 8)}px`
                                }}>
                                    <HexColorPicker className="rounded-sm" color={accent} onChange={setAccent} />
                                    <input type="text" onChange={(e) => setAccent(e.currentTarget.value)} value={accent} className="bg-primary-500 transition p-2 rounded-sm outline-none max-w-[200px]" />
                                </div>;
                            }
                            return <Menu />;
                        }
                    });
                }}
            >
                Accent
            </div>
            <div className="justify-center items-center flex cursor-pointer transition rounded-md py-2 px-4 w-full border" style={{
                background: primary,
                borderColor: `color-mix(in oklab, color-mix(in oklab, ${primary}, #ffffff 40%) 20%, transparent)`
            }}
                onClick={(e) => {
                    e.stopPropagation();
                    Dispatcher.emit("OPEN_CONTEXT_MENU", {
                        render() {
                            function Menu() {
                                const targetRef = useRef(null);
                                const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

                                useLayoutEffect(() => {
                                    if (targetRef.current) {
                                        setDimensions({
                                            width: (targetRef.current as any).offsetWidth,
                                            height: (targetRef.current as any).offsetHeight
                                        });
                                    }
                                }, []);
                                return <div ref={targetRef} className="contextmenu" onClick={e => e.stopPropagation()} style={{
                                    top: `${Math.min(e.pageY, window.innerHeight - dimensions.height - 8)}px`,
                                    left: `${Math.min(e.pageX, window.innerWidth - dimensions.width - 8)}px`
                                }}>
                                    <HexColorPicker className="rounded-sm" color={primary} onChange={setPrimary} />
                                    <input type="text" onChange={(e) => setPrimary(e.currentTarget.value)} value={primary} className="bg-primary-500 transition p-2 rounded-sm outline-none max-w-[200px]" />
                                </div>;
                            }
                            return <Menu />;
                        }
                    });
                }}
            >
                Primary
            </div>
            <div className="justify-center items-center flex cursor-pointer transition rounded-md py-2 px-4 w-full border" style={{
                background: secondary,
                borderColor: `color-mix(in oklab, color-mix(in oklab, ${secondary}, #ffffff 40%) 20%, transparent)`
            }}
                onClick={(e) => {
                    e.stopPropagation();
                    Dispatcher.emit("OPEN_CONTEXT_MENU", {
                        render() {
                            function Menu() {
                                const targetRef = useRef(null);
                                const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

                                useLayoutEffect(() => {
                                    if (targetRef.current) {
                                        setDimensions({
                                            width: (targetRef.current as any).offsetWidth,
                                            height: (targetRef.current as any).offsetHeight
                                        });
                                    }
                                }, []);
                                return <div ref={targetRef} className="contextmenu" onClick={e => e.stopPropagation()} style={{
                                    top: `${Math.min(e.pageY, window.innerHeight - dimensions.height - 8)}px`,
                                    left: `${Math.min(e.pageX, window.innerWidth - dimensions.width - 8)}px`
                                }}>
                                    <HexColorPicker className="rounded-sm" color={secondary} onChange={setSecondary} />
                                    <input type="text" onChange={(e) => setSecondary(e.currentTarget.value)} value={secondary} className="bg-primary-500 transition p-2 rounded-sm outline-none max-w-[200px]" />
                                </div>;
                            }
                            return <Menu />;
                        }
                    });
                }}
            >
                Secondary
            </div>
            <div className="justify-center items-center flex cursor-pointer transition rounded-md py-2 px-4 w-full border" style={{
                background: tertiary,
                borderColor: `color-mix(in oklab, color-mix(in oklab, ${tertiary}, #ffffff 40%) 20%, transparent)`
            }}
                onClick={(e) => {
                    e.stopPropagation();
                    Dispatcher.emit("OPEN_CONTEXT_MENU", {
                        render() {
                            function Menu() {
                                const targetRef = useRef(null);
                                const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

                                useLayoutEffect(() => {
                                    if (targetRef.current) {
                                        setDimensions({
                                            width: (targetRef.current as any).offsetWidth,
                                            height: (targetRef.current as any).offsetHeight
                                        });
                                    }
                                }, []);
                                return <div ref={targetRef} className="contextmenu" onClick={e => e.stopPropagation()} style={{
                                    top: `${Math.min(e.pageY, window.innerHeight - dimensions.height - 8)}px`,
                                    left: `${Math.min(e.pageX, window.innerWidth - dimensions.width - 8)}px`
                                }}>
                                    <HexColorPicker className="rounded-sm" color={tertiary} onChange={setTertiary} />
                                    <input type="text" onChange={(e) => setTertiary(e.currentTarget.value)} value={tertiary} className="bg-primary-500 transition p-2 rounded-sm outline-none max-w-[200px]" />
                                </div>;
                            }
                            return <Menu />;
                        }
                    });
                }}
            >
                Tertiary
            </div>
        </div>
        <button className="button button-accent" type="submit">Submit Colorway</button>
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
                if (e.currentTarget.files && e.currentTarget.files.length) {
                    setFile(e.currentTarget.files[0]);
                }
            }} />
            <div className='bg-primary-700 hover:bg-primary-400 rounded-l-sm py-2 px-4 transition cursor-pointer' onClick={() => (fileInput.current as unknown as HTMLInputElement).click()}>Select</div>
            <input type="text" readOnly value={file.name} placeholder='No file selected...' className='pl-2' />
        </div>
        <button className="button button-accent" type="submit">Submit Colorway</button>
    </Form>
}
