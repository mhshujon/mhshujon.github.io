import { FileDown } from 'lucide-react';
import Button from '../common/Button';

export default function ResumeButton() {
    return (
        <a
            href="/resume/resume.pdf"
            download="Resume_Web_Application_Engineer_Monir.pdf"
            className="group w-full sm:w-auto"
        >
            <Button
                variant="secondary"
                Icon={FileDown}
                className="w-full sm:w-auto text-sm sm:text-base whitespace-nowrap"
            >
                Download Resume
            </Button>
        </a>
    );
}