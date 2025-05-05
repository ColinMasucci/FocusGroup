import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";
import CompanySessionCard from "../CompanySessionCard";
import LoadingAnimation from "../LoadingAnimation";
import CompanyCreateSession from "./CompanyCreateSession";


const CompanySessions = () => {

    const [fetchError, setFetchError] = useState(null)
    const [sessions, setSessions] = useState(null)
    const [loading, setLoading] = useState(false)

    const [mode, setMode] = useState('main')

    useEffect(() => {
        const fetchSessions = async () => {
            setLoading(true)
            const {data, error} = await supabase
                .from("practice")
                .select()
            
                if (error){
                    setFetchError("Error Fetching Session Data")
                    setSessions(null)
                    console.log(error)
                }
                if(data){
                    setSessions(data)
                    setFetchError(null)
                }
            setLoading(false)
        }

        fetchSessions()
    }, [])

    return(
        <div className="p-6">
            {mode==="main" && (
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Sessions</h2>
                    {loading && (
                        <LoadingAnimation/>
                    )}
                    
                    {fetchError && (<p>{fetchError}</p>)}
                    {sessions && (
                        <div>
                            <div>
                                <button className="bg-indigo-500 text-xl font-bold text-white rounded-2xl shadow-lg p-2 m-2 hover:bg-indigo-700" onClick={() => setMode("create")}>+ Create Session</button>
                                {sessions.map( session => (
                                    <CompanySessionCard key={session.id} session={session}/>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
            {mode==="create" && (
                <div>
                    <CompanyCreateSession setMode={setMode}/>
                </div>
            )}
            {mode==="edit" && (
                <div>
                    <CompanyCreateSession setMode={setMode}/>
                </div>
            )}
            
        </div>
    );
};

export default CompanySessions