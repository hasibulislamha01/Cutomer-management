

const DateFormatter = ({ unformattedDate }) => {
    if (!unformattedDate) { return }
    const date = new Date(unformattedDate)
    const formatted = new Intl.DateTimeFormat('en-US', {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(date)
    return (
        <h5>{formatted}</h5>
    )
};

export default DateFormatter;