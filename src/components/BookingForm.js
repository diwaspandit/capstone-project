import React, {useState} from 'react';

const BookingForm=(props)=>{
    const [date, setDate]=useState("");
    const [times, setTimes]=useState("");
    const [guests, setGuests]=useState("1");
    const [occasion, setOccasion]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange=(e)=>{
        setDate(e);
        props.dispatch(e);
    }

    return(
        <>
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/* for date book */}
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id='book-date' value={date} onChange={(e)=> handleChange(e.target.value)} type='date' required/>
                        </div>

                        {/* for time selection */}
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id="book-time" value={times} onChange={e=> setTimes(e.target.value)}>
                                <options value="">Select a Time</options>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes=> {return <option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>

                        {/* for Number of guests */}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests: </label>
                            <input id='book-guests'  type="number" value={guests} onChange={(e)=>setGuests(e.target.value)} required/>
                        </div>
                        {/* Occasion field*/}
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={e=> setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        {/* submit button */}
                        <div className='btnReceive'>
                            <input aria-label='onClick' type='submit' value={'Make Your Reservation'}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
        </>
    );
};

export default BookingForm;