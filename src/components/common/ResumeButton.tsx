import { FileDown } from 'lucide-react';
import Button from '../common/Button';

export default function ResumeButton() {
    return (
        <a
            href="/resume/resume.pdf"
            download="Resume_Web_Application_Engineer_Monir.pdf"
            className="group"
        >
            <Button
                variant="secondary"
                Icon={FileDown}
            >
                Download Resume
            </Button>
        </a>
    );
}