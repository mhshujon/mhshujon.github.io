export default function Copyright() {
    const currentYear = new Date().getFullYear();
    
    return (
        <p className="text-gray-500 text-sm">
            &copy; {currentYear} MHSHUJON. All rights reserved.
        </p>
    );
}