import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Mohammed Abdul Faisal Hussain</h1>
        <p className="text-lg">Data Science | Cloud Engineer | Web Developer</p>
        <p className="text-sm text-gray-600">Maryland, USA | +1-410-779-8732 | <a className="text-blue-600" href="mailto:mafaisalhussain017@gmail.com">mafaisalhussain017@gmail.com</a></p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/mafaisalhussain" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://linkedin.com/in/faisal-hussain-mohammed-abdul-731a1631b" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
        </div>
      </section>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p>I’m a passionate and versatile Data Science professional currently pursuing a Master of Professional Studies in Data Science at the University of Maryland, Baltimore County...</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li><strong>Full Stack Academy – Cloud Engineer:</strong> Designed scalable AWS infrastructure, implemented CI/CD, Docker, Kubernetes.</li>
            <li><strong>Cognifyz Technologies – Data Science Intern:</strong> Built ML models, performed data analysis in Python.</li>
            <li><strong>Internshala – Data Science Intern:</strong> Developed statistical models, leveraged Python for analytics.</li>
            <li><strong>Virtual Instrumentation – LabVIEW Developer:</strong> Built real-time monitoring tools with LabVIEW and Arduino.</li>
            <li><strong>Lets Grow More – Web Developer:</strong> Created responsive UIs using HTML, CSS, JavaScript.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li><strong>Diabetic Foot Ulcer Detection:</strong> NI LabVIEW, Arduino, Firebase.</li>
            <li><strong>Drowsiness Detection & Obstacle Alert:</strong> Arduino IDE embedded system.</li>
            <li><strong>Restaurant Ratings Prediction:</strong> Python, MySQL, Jupyter.</li>
            <li><strong>Digit Recognizer:</strong> ML classifier for handwritten digits.</li>
            <li><strong>Web Apps:</strong> Registration Form, To-Do Manager, Calculator.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p><strong>Languages:</strong> Python, SQL, Java, C</p>
          <p><strong>Cloud & Tools:</strong> AWS, Docker, Kubernetes, Git, Linux, LabVIEW</p>
          <p><strong>Web:</strong> HTML, CSS, JavaScript</p>
          <p><strong>Data:</strong> ML, Big Data, MySQL</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p><strong>MPS in Data Science</strong> – University of Maryland, Baltimore County (Pursuing, 2025)</p>
          <p><strong>B.Tech in ECE</strong> – Vardhaman College of Engineering (2020–2024), CGPA: 7.95</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-2">
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <ul className="list-disc ml-5">
            <li>Accenture – Data Analytics & Visualization</li>
            <li>Tata Group – Data Visualization</li>
            <li>NI LabVIEW</li>
            <li>Entuple – VLSI</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold">Volunteer Work</h2>
          <p><strong>Festronix-2k22:</strong> Organized competitions and workshops for hands-on student experience.</p>
        </CardContent>
      </Card>
    </div>
  );
}
